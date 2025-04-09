'use client';

import React, { useState } from 'react';
<<<<<<< HEAD
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
import { z } from 'zod';
import kontaktConfig from '@/config/kontakt.json';
import BannerHeader from '@/components/BannerHeader';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/ 
);

=======
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import BannerHeader from '@/components/BannerHeader';
import kontaktConfig from '@/config/kontakt.json';

// Regex for validating phone numbers
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// Schema for the contact form using Zod
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Ime mora imati najmanje 2 karaktera')
<<<<<<< HEAD
    .max(50, 'Ime ne može biti duže od 50 karaktera'),
  email: z.string().email('Unesite validnu email adresu'),
  phone: z
    .string()
    .regex(phoneRegex, 'Unesite validan broj telefona')
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .min(3, 'Predmet mora imati najmanje 3 karaktera')
    .max(100, 'Predmet ne može biti duži od 100 karaktera'),
  message: z
    .string()
    .min(10, 'Poruka mora imati najmanje 10 karaktera')
    .max(1000, 'Poruka ne može biti duža od 1000 karaktera')
});

type FormData = z.infer<typeof contactFormSchema>;

interface FormErrors {
  [key: string]: string[];
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

export default function ContactPage() {
  const { title, subtitle, contactInfo, mapEmbedUrl, form, toasterPosition } = kontaktConfig;
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    try {
      const fieldSchema = contactFormSchema.shape[name as keyof FormData];
      fieldSchema.parse(value);
      setErrors((prev: FormErrors) => ({ ...prev, [name]: [] }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev: FormErrors) => ({
          ...prev,
          [name]: error.errors.map((err) => err.message)
        }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = contactFormSchema.parse(formData);
      
      // Send email using the new API route
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      toast.success('Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.');
      setFormData(initialFormData);
      setTouched({});
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path) {
            const field = err.path[0].toString();
            if (!newErrors[field]) {
              newErrors[field] = [];
            }
            newErrors[field].push(err.message);
          }
        });
        setErrors(newErrors);
        toast.error('Molimo ispravite greške u formi.');
      } else {
        toast.error('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getInputClassName = (fieldName: string) => `
    w-full bg-[#0c0c0c] border px-4 py-3 focus:outline-none transition-colors
    ${touched[fieldName] && errors[fieldName]?.length 
      ? 'border-red-500 focus:border-red-600' 
      : 'border-zinc-800 focus:border-zinc-600'}
  `;

  return (
    <>
=======
    .max(50, 'Ime ne može imati više od 50 karaktera'),
  email: z
    .string()
    .email('Unesite validnu email adresu')
    .min(1, 'Email je obavezan'),
  phone: z
    .string()
    .regex(phoneRegex, 'Unesite validan broj telefona')
    .min(1, 'Telefon je obavezan'),
  message: z
    .string()
    .min(10, 'Poruka mora imati najmanje 10 karaktera')
    .max(1000, 'Poruka ne može imati više od 1000 karaktera'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const validatedData = contactFormSchema.parse(formData);
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success('Poruka je uspešno poslata! Kontaktiraćemo vas uskoro.');
      reset();
    } catch (error) {
      toast.error('Došlo je do greške. Molimo pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6" />;
      case 'Phone':
        return <Phone className="w-6 h-6" />;
      case 'Mail':
        return <Mail className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Reusable Banner (same on all pages) */}
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
      <BannerHeader />

      <div className="pt-32">
        <div className="container mx-auto px-6 md:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.5 }}
          >
            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle max-w-2xl">{subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {form.fields.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('name')}
                      placeholder={form.fields.name.placeholder}
                      aria-invalid={touched.name && errors.name?.length > 0}
                      aria-describedby="name-error"
                    />
                    {touched.name && errors.name?.length > 0 && (
                      <p id="name-error" className="mt-1 text-sm text-red-500">
                        {errors.name[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {form.fields.email.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('email')}
                      placeholder={form.fields.email.placeholder}
                      aria-invalid={touched.email && errors.email?.length > 0}
                      aria-describedby="email-error"
                    />
                    {touched.email && errors.email?.length > 0 && (
                      <p id="email-error" className="mt-1 text-sm text-red-500">
                        {errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {form.fields.phone.label}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('phone')}
                      placeholder={form.fields.phone.placeholder}
                      aria-invalid={touched.phone && errors.phone?.length > 0}
                      aria-describedby="phone-error"
                    />
                    {touched.phone && errors.phone?.length > 0 && (
                      <p id="phone-error" className="mt-1 text-sm text-red-500">
                        {errors.phone[0]}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {form.fields.subject.label}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('subject')}
                      placeholder={form.fields.subject.placeholder}
                      aria-invalid={touched.subject && errors.subject?.length > 0}
                      aria-describedby="subject-error"
                    />
                    {touched.subject && errors.subject?.length > 0 && (
                      <p id="subject-error" className="mt-1 text-sm text-red-500">
                        {errors.subject[0]}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={form.fields.message.rows}
                    className={`${getInputClassName('message')} resize-none`}
                    placeholder={form.fields.message.placeholder}
                    aria-invalid={touched.message && errors.message?.length > 0}
                    aria-describedby="message-error"
                  ></textarea>
                  {touched.message && errors.message?.length > 0 && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message[0]}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="button-primary w-full inline-flex items-center justify-center py-3 leading-none disabled:opacity-50"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  ) : (
                    <>
                      <Send size={18} className="inline-block mr-4" />
                      <span className="inline-block text-center">{form.submitButtonText}</span>
                    </>
                  )}
=======
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {kontaktConfig.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {kontaktConfig.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {kontaktConfig.form.fields.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder={kontaktConfig.form.fields.name.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {kontaktConfig.form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder={kontaktConfig.form.fields.email.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {kontaktConfig.form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    placeholder={kontaktConfig.form.fields.phone.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {kontaktConfig.form.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    rows={kontaktConfig.form.fields.message.rows}
                    {...register('message')}
                    placeholder={kontaktConfig.form.fields.message.placeholder}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Slanje...' : kontaktConfig.form.submitButtonText}
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                </button>
              </form>
            </motion.div>

<<<<<<< HEAD
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {kontaktConfig.contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="p-6 bg-[rgba(182,155,95,0.05)] backdrop-blur-sm border border-[rgba(182,155,95,0.2)] rounded-lg transition-colors sm:group-hover:border-[rgba(182,155,95,0.4)] group"
                  >
                    <div className="text-zinc-400 transition-colors sm:group-hover:text-white mb-4">
                      {(() => {
                        switch (info.icon) {
                          case 'MapPin':
                            return <MapPin className="w-6 h-6" />;
                          case 'Phone':
                            return <Phone className="w-6 h-6" />;
                          case 'Mail':
                            return <Mail className="w-6 h-6" />;
                          case 'Clock':
                            return <Clock className="w-6 h-6" />;
                          default:
                            return null;
                        }
                      })()}
                    </div>
                    <h3 className="text-xl font-light mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-zinc-400 transition-colors sm:hover:text-white"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-zinc-400">{info.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="relative h-[400px] border border-zinc-800">
=======
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Informacije</h2>
              <div className="space-y-6">
                {kontaktConfig.contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary">
                      {getIcon(info.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
                <iframe
                  src={kontaktConfig.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125 brightness-75"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <Toaster position={kontaktConfig.toasterPosition as "top-right"} />
=======
>>>>>>> f38c0df38b5632c24ec62881b3ce72080631ec20
    </>
  );
}
