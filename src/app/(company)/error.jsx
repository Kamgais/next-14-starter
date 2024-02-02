"use client";

export default function CompanyError({error, reset}) {
  return (
    <div className="text-red-500">
      Something went wrong
      <p>
        {error.message}
      </p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
