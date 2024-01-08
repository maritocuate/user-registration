'use client'

import { useRouter } from 'next/navigation'
import { Submit } from './styles'
import { useAppSelector } from './redux/hooks'

export default function Register() {
  const router = useRouter()
  const users = useAppSelector(state => state.usersReducer)

  return (
    <div className="grid w-80 gap-y-2 my-5">
      <div>
        {!users.length ? (
          <p className="text-white uppercase bg-black p-3">No users</p>
        ) : (
          users.map((user, index) => {
            return (
              <p
                className="flex flex-col p-3 bg-gray-200 my-3 rounded-md"
                key={index}
              >
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
                <span>Genre: {user.genre}</span>
                <span>Date of birth: {user.dateOfBirth}</span>
              </p>
            )
          })
        )}
      </div>
      <Submit onClick={() => router.push('/register')}>Add new user</Submit>
    </div>
  )
}
