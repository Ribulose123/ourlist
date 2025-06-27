 
import { motion } from 'framer-motion';
import { easeInOut } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  Calendar,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  BarChart3,
  Clock,
  Heart
} from 'lucide-react';

const LandingPage = () => {

    const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  } as const;

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Monthly Planning",
      description: "Set ambitious monthly goals and track your journey to success.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Weekly Breakdown",
      description: "Break down your monthly goals into manageable weekly tasks.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Visualize your progress with beautiful charts and analytics.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accountability Partners",
      description: "Share your goals and stay motivated with accountability partners.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "95%", label: "Goal Completion Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "2.5x", label: "Productivity Increase", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "30min", label: "Daily Planning Time", icon: <Clock className="w-6 h-6" /> },
    { number: "10k+", label: "Happy Planners", icon: <Heart className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold font-display">PlanFlow</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-glow transition-all duration-300"
            onClick={() => navigate('/auth')}
          >
            Get Started Free
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="relative z-10 px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
              ✨ Transform Your Planning Experience
            </span>
            <h1 className="text-6xl md:text-7xl font-bold font-display mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Plan Your Month,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Achieve Your Dreams
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Break down your ambitious monthly goals into achievable weekly tasks.
              Track your progress with beautiful visualizations and stay accountable with partners.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-glow transition-all duration-300"
            >
              <span>Start Planning Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-600 rounded-full text-lg font-semibold hover:border-gray-400 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Floating Dashboard Preview */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative max-w-6xl mx-auto mt-12 p-4 bg-gray-800/50 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg"
          >
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-500" />
            <img
              src="https://via.placeholder.com/1200x700/1E293B/E2E8F0?text=Dashboard+Preview" // Placeholder image for a dashboard
              alt="Dashboard Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* --- */}

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold font-display mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            How PlanFlow Elevates Your Goals
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-2xl bg-gray-800/60 border border-gray-700 backdrop-blur-md shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl`}
              >
                <div className={`p-4 rounded-full mb-6 bg-gradient-to-r ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- */}

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold font-display mb-16 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Our Impact Speaks for Itself
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gray-900/70 border border-gray-700 shadow-xl flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-300 mb-4">
                  {stat.icon}
                </div>
                <motion.div
                  className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}

      {/* Call to Action Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-3xl p-12 shadow-2xl border border-blue-700/50">
          <motion.h2
            className="text-5xl font-bold font-display mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Achieve Your Biggest Goals?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-200 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of motivated individuals transforming their productivity with PlanFlow.
            Start your journey today, it's free!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xl font-bold flex items-center justify-center space-x-3 mx-auto hover:shadow-glow transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => navigate('/auth')}
          >
            <span>Get Started with PlanFlow</span>
            <Sparkles className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* --- */}

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 text-center text-gray-400">
        <div className="max-w-7xl mx-auto border-t border-gray-700 pt-8">
          <p>&copy; {new Date().getFullYear()} PlanFlow. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;