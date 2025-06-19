'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navigation } from '../../components/layout/Navigation';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import styles from './page.module.css';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Signing up with:', formData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/');
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ form: 'Failed to sign up. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Create an Account</h1>
            <p className={styles.description}>
              Join our community to create and manage landing pages
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                className={styles.inputField}
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                className={styles.inputField}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className={styles.inputField}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className={styles.inputField}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className={styles.inputField}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword}</p>
              )}
            </div>
            
            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
            
            {errors.form && <p className={styles.error}>{errors.form}</p>}
          </form>
          
          <div className={styles.footer}>
            Already have an account?{' '}
            <Link href="/login" className={styles.link}>
              Log In
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
