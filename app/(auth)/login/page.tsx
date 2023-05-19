import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <section className="min-h-screen pt-20">
      <div className="container mx-auto flex h-full items-center justify-center px-6 py-12">
        <div className="px-8 py-10 md:w-8/12 lg:w-5/12">
          <LoginForm />
        </div>
      </div>
    </section>
  )
}