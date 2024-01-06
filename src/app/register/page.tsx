'use client'

import { userSchema, mappedGenres } from '@/schema/userSchema'
import { Input, Submit, Error, Select } from '../styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  genre: string
  dayOfBirth: string
  dateOfBirth: string
  password: string
  confirmPassword: string
}

export default function Register() {
  // Configures the hook useForm with the expected data type (Inputs)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  })

  // Generates the options based on mappedGenres
  const genreOptions = Object.entries(mappedGenres).map(([key, value]) => (
    <option value={key} key={key}>
      {value}
    </option>
  ))

  return (
    <form
      className="grid w-80 gap-y-2 my-5"
      onSubmit={handleSubmit(data => console.log(data))}
    >
      {/* Name */}
      <label>Name</label>
      <Input type="text" id="name" {...register('name')} />
      {errors.name?.message && <Error>{errors.name?.message}</Error>}

      {/* Email */}
      <label>Email</label>
      <Input type="text" id="email" {...register('email')} />
      {errors.email?.message && <Error>{errors.email?.message}</Error>}

      {/* Genre */}
      <label>Genre</label>
      <Select id="genre" {...register('genre')}>
        <option value=""></option>
        {genreOptions}
      </Select>
      {errors.genre?.message && <Error>{errors.genre?.message}</Error>}

      {/* Date */}
      <label>Date of Birth</label>
      <Input type="date" id="dateOfBirth" {...register('dateOfBirth')} />
      {errors.dateOfBirth?.message && (
        <Error>{errors.dateOfBirth?.message}</Error>
      )}

      {/* Passwords */}
      <label>Password</label>
      <Input type="password" id="password" {...register('password')} />
      {errors.password?.message && <Error>{errors.password?.message}</Error>}

      <label>Confirm Password</label>
      <Input
        type="password"
        id="confirmPassword"
        {...register('confirmPassword')}
      />
      {errors.confirmPassword?.message && (
        <Error>{errors.confirmPassword?.message}</Error>
      )}

      <Submit type="submit">Send</Submit>
    </form>
  )
}
