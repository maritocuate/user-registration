import { z } from 'zod'

const genres = ['male', 'female', 'other'] as const

export type Genres = (typeof genres)[number]

export const mappedGenres: { [key in Genres]: string } = {
  male: 'Male',
  female: 'Female',
  other: 'Other',
}

export const userSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: 'Name must be at least 3 characters',
      })
      .max(20, {
        message: 'Name must be less than 20 characters',
      }),
    email: z.string().email({
      message: 'Invalid email',
    }),
    genre: z.enum(genres, {
      errorMap: () => ({ message: 'Select a genre' }),
    }),
    dateOfBirth: z
      .string()
      .refine(dob => new Date(dob).toString() !== 'Invalid Date', {
        message: 'Please enter a valid date of birth',
      }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters long',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Password must be at least 6 characters long',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })
