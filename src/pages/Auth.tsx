
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Mail } from 'lucide-react';
import AnimatedLogo from '@/components/UI/AnimatedLogo';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type AuthMode = 'welcome' | 'login' | 'signup';

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>('welcome');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
      toast('Welcome back! 👋', {
        description: 'You have successfully logged in to Pet Social.',
      });
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
      toast('Account created! 🎉', {
        description: 'Your Pet Social account has been created successfully.',
      });
    }, 1500);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    
    // Simulate Google auth
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
      toast('Welcome to Pet Social! 🐾', {
        description: 'You have successfully signed in with Google.',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Welcome view */}
      <AnimatePresence mode="wait">
        {mode === 'welcome' && (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col justify-center items-center p-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <AnimatedLogo size="md" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-sm space-y-6"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome</h1>
                <p className="text-muted-foreground">Connect with pet lovers around the world</p>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => setMode('login')}
                  className="w-full bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-all hover:shadow-md active:scale-[0.98]"
                >
                  Log in
                </button>
                
                <button
                  onClick={() => setMode('signup')}
                  className="w-full bg-secondary text-secondary-foreground font-medium py-2.5 px-4 rounded-lg transition-all hover:shadow-sm active:scale-[0.98]"
                >
                  Create an account
                </button>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xs text-muted-foreground text-center"
            >
              By continuing, you agree to our Terms of Service and Privacy Policy
            </motion.p>
          </motion.div>
        )}

        {/* Login view */}
        {mode === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col p-6"
          >
            <div className="flex items-center mb-8">
              <button 
                onClick={() => setMode('welcome')}
                className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <h1 className="text-xl font-semibold ml-2">Log in</h1>
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password
                    </label>
                    <button type="button" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "w-full bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-all",
                    isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-md active:scale-[0.98]"
                  )}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Logging in...
                    </span>
                  ) : (
                    "Log in"
                  )}
                </button>
              </form>
              
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-border"></div>
                <div className="px-3 text-xs text-muted-foreground">or continue with</div>
                <div className="flex-1 border-t border-border"></div>
              </div>
              
              <button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className={cn(
                  "w-full flex items-center justify-center bg-white text-slate-800 border border-border font-medium py-2.5 px-4 rounded-lg transition-all",
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-50 hover:shadow-sm active:scale-[0.98]"
                )}
              >
                {/* Replace Google icon with a simple "G" */}
                <span className="flex items-center justify-center w-4 h-4 bg-blue-500 text-white rounded-sm text-xs font-bold mr-2">G</span>
                Google
              </button>
              
              <p className="mt-8 text-sm text-center text-muted-foreground">
                Don't have an account?{' '}
                <button 
                  onClick={() => setMode('signup')} 
                  className="text-primary hover:underline"
                  disabled={isLoading}
                >
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>
        )}

        {/* Sign up view */}
        {mode === 'signup' && (
          <motion.div
            key="signup"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col p-6"
          >
            <div className="flex items-center mb-8">
              <button 
                onClick={() => setMode('welcome')}
                className="p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <h1 className="text-xl font-semibold ml-2">Create an account</h1>
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
              <form onSubmit={handleSignUp} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="signup-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="signup-password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Create a password"
                    required
                  />
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-xs text-muted-foreground">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "w-full bg-primary text-primary-foreground font-medium py-2.5 px-4 rounded-lg transition-all",
                    isLoading ? "opacity-70 cursor-not-allowed" : "hover:shadow-md active:scale-[0.98]"
                  )}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Creating account...
                    </span>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </form>
              
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-border"></div>
                <div className="px-3 text-xs text-muted-foreground">or continue with</div>
                <div className="flex-1 border-t border-border"></div>
              </div>
              
              <button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className={cn(
                  "w-full flex items-center justify-center bg-white text-slate-800 border border-border font-medium py-2.5 px-4 rounded-lg transition-all",
                  isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-50 hover:shadow-sm active:scale-[0.98]"
                )}
              >
                {/* Replace Google icon with a simple "G" */}
                <span className="flex items-center justify-center w-4 h-4 bg-blue-500 text-white rounded-sm text-xs font-bold mr-2">G</span>
                Google
              </button>
              
              <p className="mt-8 text-sm text-center text-muted-foreground">
                Already have an account?{' '}
                <button 
                  onClick={() => setMode('login')} 
                  className="text-primary hover:underline"
                  disabled={isLoading}
                >
                  Log in
                </button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Auth;
