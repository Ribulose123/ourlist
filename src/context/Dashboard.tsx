/* // src/context/DashboardContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './useAuth';

// Move interfaces to a separate types file (src/types/dashboard.ts)
interface MonthlyPlan {
  id: string;
  title: string;
  goals: string[];
  startDate: Date;
  endDate: Date;
  completed: boolean;
  userId: string;
}

interface WeeklyPlan {
  id: string;
  title: string;
  tasks: string[];
  weekOf: Date;
  completed: boolean;
  userId: string;
}

interface AccountabilityPartner {
  id: string;
  name: string;
  email: string;
  partnerId: string;
  status: 'pending' | 'active' | 'inactive';
}

interface DashboardContextType {
  monthlyPlans: MonthlyPlan[];
  weeklyPlans: WeeklyPlan[];
  partnerData: AccountabilityPartner | null;
  loading: boolean;
  currentProgress: {
    monthly: number;
    weekly: number;
    streak: number;
  };
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [monthlyPlans, setMonthlyPlans] = useState<MonthlyPlan[]>([]);
  const [weeklyPlans, setWeeklyPlans] = useState<WeeklyPlan[]>([]);
  const [partnerData, setPartnerData] = useState<AccountabilityPartner | null>(null);
  const [loading, setLoading] = useState(true);

  const currentProgress = {
    monthly: calculateCompletion(monthlyPlans),
    weekly: calculateCompletion(weeklyPlans),
    streak: calculateStreak([...monthlyPlans, ...weeklyPlans])
  };

  useEffect(() => {
    if (!user?.uid) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribeFunctions: (() => void)[] = [];

    // Monthly plans listener
    const monthlyQuery = query(
      collection(db, "monthlyPlans"),
      where("userId", "==", user.uid)
    );
    const unsubscribeMonthly = onSnapshot(monthlyQuery, (snapshot) => {
      const plans = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        startDate: doc.data().startDate?.toDate(),
        endDate: doc.data().endDate?.toDate()
      })) as MonthlyPlan[];
      setMonthlyPlans(plans);
    });
    unsubscribeFunctions.push(unsubscribeMonthly);

    // Weekly plans listener
    const weeklyQuery = query(
      collection(db, "weeklyPlans"),
      where("userId", "==", user.uid)
    );
    const unsubscribeWeekly = onSnapshot(weeklyQuery, (snapshot) => {
      const plans = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        weekOf: doc.data().weekOf?.toDate()
      })) as WeeklyPlan[];
      setWeeklyPlans(plans);
    });
    unsubscribeFunctions.push(unsubscribeWeekly);

    // Partner data listener
    const partnerQuery = query(
      collection(db, "accountabilityPartners"),
      where("users", "array-contains", user.uid)
    );
    const unsubscribePartner = onSnapshot(partnerQuery, (snapshot) => {
      const partnerDoc = snapshot.docs[0];
      setPartnerData(partnerDoc ? {
        id: partnerDoc.id,
        ...partnerDoc.data()
      } as AccountabilityPartner : null);
    });
    unsubscribeFunctions.push(unsubscribePartner);

    setLoading(false);

    return () => unsubscribeFunctions.forEach(unsub => unsub());
  }, [user?.uid]);

  const value: DashboardContextType = {
    monthlyPlans,
    weeklyPlans,
    partnerData,
    loading,
    currentProgress
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

// Helper functions
function calculateCompletion(plans: { completed: boolean }[]): number {
  if (plans.length === 0) return 0;
  const completedCount = plans.filter(plan => plan.completed).length;
  return Math.round((completedCount / plans.length) * 100);
}

function calculateStreak(plans: { completed: boolean; endDate?: Date }[]): number {
  // Implement your streak calculation logic
  return 0;
}

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}; */