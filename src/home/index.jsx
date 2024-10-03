import { Button } from "../home/ui-components"
import { Card, CardContent } from "../home/ui-components"
import { AtomIcon, Edit, Share2 } from "lucide-react"
import Header from "../components/custom/Header"

export default function LandingPage() {
  return (
    <>
    < Header />
    <div className="bg-white">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <p className="text-sm font-medium text-gray-500">Welcome to SlateResume!</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build your resume with{" "}
              <span className="text-emerald-400">AI</span>
            </h1>
            <p className="max-w-[42rem] text-xl leading-normal text-gray-500 sm:text-2xl">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>
            <Button size="lg" className="mt-4 bg-emerald-400 text-white hover:bg-emerald-500">
              <a href="/">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20 ">

      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it Works?</h2>
            <p className="max-w-[900px] text-xl text-gray-500 md:text-2xl">
              Create your professional resume in just 3 simple steps
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                <AtomIcon className="h-12 w-12 text-emerald-400" />
                <h3 className="text-xl font-bold">Input Your Information</h3>
                <p className="text-gray-500">
                  Enter your professional details, skills, and experiences into our intuitive AI-powered form. Our system adapts to your unique profile.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                <Edit className="h-12 w-12 text-emerald-400" />
                <h3 className="text-xl font-bold">Customize Your Resume</h3>
                <p className="text-gray-500">
                  Choose from a variety of professional templates and tailor your resume with our AI suggestions. Fine-tune the content to match your target job.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
                <Share2 className="h-12 w-12 text-emerald-400" />
                <h3 className="text-xl font-bold">Download and Share</h3>
                <p className="text-gray-500">
                  Export your polished resume in multiple formats. Easily share it with potential employers or save it for future updates as your career grows.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-emerald-400 text-white hover:bg-emerald-500">
              <a href="/sign-in">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
