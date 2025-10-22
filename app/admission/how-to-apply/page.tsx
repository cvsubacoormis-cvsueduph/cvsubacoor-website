import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedPage from "@/components/animated-page";
import AnimatedSectionTitle from "@/components/animated-section-title";

export default function HowToApplyPage() {
  return (
    <>
      <AnimatedPage>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6 animate-element">
            <Button asChild className="mb-6">
              <Link
                href="/admission/requirements-procedures"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Requirements & Procedures
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">How to Apply</h1>
            <div className="flex items-center text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              Admission
              <span className="mx-2">/</span>
              <span>Admission Process</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-slate-50 p-6 rounded-lg animate-element">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Create an Account</h4>
                      <p className="mt-2 mb-3">
                        Begin by creating an account on our online application
                        portal. This will allow you to save your progress and
                        return to complete your application later if needed.
                      </p>
                      <Button className="mb-2">
                        Create Application Account
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Sign in here
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Complete the Application Form
                      </h4>
                      <p className="mt-2 mb-3">
                        Fill out the online application form with your personal
                        information, academic history, and extracurricular
                        activities. Be sure to provide accurate and complete
                        information.
                      </p>
                      <div className="bg-white p-4 rounded-md border mb-3">
                        <h5 className="font-bold mb-2">
                          Required Information:
                        </h5>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>
                            Personal details (name, contact information, etc.)
                          </li>
                          <li>Educational background</li>
                          <li>Extracurricular activities and achievements</li>
                          <li>Program preferences</li>
                          <li>Personal statement/essay</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Tip: Have all your information ready before starting the
                        application to streamline the process.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Pay Application Fee</h4>
                      <p className="mt-2 mb-3">
                        Pay the non-refundable application fee of $50 (fee
                        waivers available for eligible students).
                      </p>
                      <div className="bg-white p-4 rounded-md border mb-3">
                        <h5 className="font-bold mb-2">Payment Methods:</h5>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>Credit/Debit Card</li>
                          <li>Electronic Bank Transfer</li>
                          <li>PayPal</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Fee waiver information:{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Check eligibility requirements
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Submit Required Documents
                      </h4>
                      <p className="mt-2 mb-3">
                        Upload or arrange for submission of all required
                        documents, including transcripts, test scores, essays,
                        and recommendations.
                      </p>
                      <div className="bg-white p-4 rounded-md border mb-3">
                        <h5 className="font-bold mb-2">Required Documents:</h5>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>Official high school transcripts</li>
                          <li>SAT/ACT scores (optional for 2025-2026)</li>
                          <li>Letters of recommendation (2)</li>
                          <li>Personal statement/essay</li>
                          <li>Additional program-specific requirements</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Documents can be uploaded directly to your application
                        portal or sent via official channels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Check Application Status
                      </h4>
                      <p className="mt-2 mb-3">
                        Monitor your application status through the online
                        portal. You will be notified when your application is
                        complete and under review.
                      </p>
                      <Button variant="outline">
                        Check Application Status
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      6
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Receive Admission Decision
                      </h4>
                      <p className="mt-2 mb-3">
                        Admission decisions are typically released within 4-6
                        weeks after your application is complete. You will be
                        notified via email and can check your decision in the
                        application portal.
                      </p>
                      <div className="bg-white p-4 rounded-md border">
                        <h5 className="font-bold mb-2">
                          Next Steps After Acceptance:
                        </h5>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>Submit enrollment deposit</li>
                          <li>Complete housing application (if applicable)</li>
                          <li>Register for orientation</li>
                          <li>Submit final transcripts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-element">
                <h3 className="text-2xl font-bold mb-4">
                  Application Timeline
                </h3>
                <div className="relative overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-royal-blue-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Application Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Deadline
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Decision Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Early Decision
                        </td>
                        <td className="px-6 py-4">November 1, 2025</td>
                        <td className="px-6 py-4">December 15, 2025</td>
                      </tr>
                      <tr className="bg-slate-50 border-b">
                        <td className="px-6 py-4 font-medium">Early Action</td>
                        <td className="px-6 py-4">December 1, 2025</td>
                        <td className="px-6 py-4">January 15, 2026</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Regular Decision
                        </td>
                        <td className="px-6 py-4">February 1, 2026</td>
                        <td className="px-6 py-4">April 1, 2026</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-medium">
                          Transfer Students (Fall)
                        </td>
                        <td className="px-6 py-4">March 15, 2026</td>
                        <td className="px-6 py-4">May 15, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="animate-element">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Important Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold">Application Opens</p>
                      <p>August 1, 2025</p>
                    </div>
                    <div>
                      <p className="font-bold">Early Decision Deadline</p>
                      <p>November 1, 2025</p>
                    </div>
                    <div>
                      <p className="font-bold">Early Action Deadline</p>
                      <p>December 1, 2025</p>
                    </div>
                    <div>
                      <p className="font-bold">Regular Decision Deadline</p>
                      <p>February 1, 2026</p>
                    </div>
                    <div>
                      <p className="font-bold">Transfer Deadline (Fall)</p>
                      <p>March 15, 2026</p>
                    </div>
                    <div>
                      <p className="font-bold">Enrollment Deposit Due</p>
                      <p>May 1, 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-element">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Application Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-between"
                      >
                        Application Checklist
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-between"
                      >
                        Essay Prompts
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-between"
                      >
                        Recommendation Form
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-between"
                      >
                        Fee Waiver Form
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-between"
                      >
                        Transfer Credit Guide
                        <Download className="h-4 w-4" />
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-element">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our admissions counselors are here to assist you throughout
                    the application process.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>admissions@university.edu</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone:</p>
                      <p>(555) 123-4567</p>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p>Monday-Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <Button className="w-full">Contact Admissions</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
