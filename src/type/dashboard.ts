// types/dashboard.ts
export interface MonthlyPlan {
  id: string;
  title: string;
  goals: string[];
  startDate: Date;
  endDate: Date;
  completed: boolean;
  userId: string;
}

export interface WeeklyPlan {
  id: string;
  title: string;
  tasks: string[];
  weekOf: Date;
  completed: boolean;
  userId: string;
}

export interface AccountabilityPartner {
  id: string;
  name: string;
  email: string;
  partnerId: string;
  status: 'pending' | 'active' | 'inactive';
}

export interface DashboardContextType {
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