'use client';

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      // Here you would typically send the data to your API endpoint
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Simulate success - replace this with actual API call
      console.log('Contact form submission:', data);
      
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center lg:px-8'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-foreground'>
          <Check className='h-8 w-8 text-background' />
        </div>
        <h1 className='mt-6 text-2xl font-semibold tracking-tight'>
          Message Sent
        </h1>
        <p className='mt-2 max-w-sm text-muted-foreground'>
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className='mt-8 gap-2 rounded-full px-8'
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 lg:px-8'>
      <div className='mx-auto max-w-2xl'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            Get in Touch
          </h1>
          <p className='mt-2 text-muted-foreground'>
            Have a question or want to work together? Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className='mt-12'>
          {error && (
            <div className='mb-6 flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive'>
              <AlertCircle className='h-4 w-4' />
              <span>{error}</span>
            </div>
          )}

          <div className='flex flex-col gap-6'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='John Doe'
                  required
                />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@example.com'
                  required
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                id='subject'
                name='subject'
                type='text'
                placeholder='What is this regarding?'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                placeholder='Your message here...'
                rows={6}
                required
              />
            </div>

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full gap-2 rounded-full md:w-auto md:px-8'
              size='lg'
            >
              {isSubmitting ? (
                <>
                  <div className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                  Sending...
                </>
              ) : (
                <>
                  <Send className='h-4 w-4' />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>

        <div className='mt-16 rounded-xl border border-border bg-muted/30 p-8'>
          <div className='flex items-start gap-4'>
            <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10'>
              <Mail className='h-5 w-5 text-primary' />
            </div>
            <div>
              <h3 className='font-semibold'>Other Ways to Reach Us</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Prefer email? You can reach us directly at{' '}
                <a
                  href='mailto:support@volt.com'
                  className='text-primary underline-offset-4 hover:underline'
                >
                  support@volt.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
