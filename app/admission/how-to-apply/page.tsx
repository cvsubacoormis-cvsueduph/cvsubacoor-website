"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  FileText,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedPage from "@/components/animated-page";
import AnimatedSectionTitle from "@/components/animated-section-title";
import { useEffect, useState } from "react";
import { HowToApplyPageSkeleton } from "@/components/skeleton/HowToApplyPage";

export default function HowToApplyPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HowToApplyPageSkeleton />;
  }
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
                Back to Requirements
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Admission Process</h1>
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
                      <h4 className="text-xl font-bold">
                        Admission Portal (Online)
                      </h4>
                      <p className="mt-2 mb-3">
                        For BACOOR CITY CAMPUS, Applicants will create a account
                        click the button below, using a gmail account and fill
                        out the online application or scan the qr code provided.
                      </p>
                      <div className="ml-6 mb-6">
                        <ul className="list-disc text-md">
                          <li>
                            The declared track/strand in the online application
                            form nad the track/strand indicated in the
                            documentary requirement should match.
                          </li>
                          <li>
                            Choose the correct entry type/category of the
                            applicant.
                          </li>
                          <li>
                            Throughly check all information input in the online
                            application form before saving and submitting to
                            avoid errors.
                          </li>
                          <li>
                            Do not forget to update/save the application every
                            time there is a change made to each field and page.
                          </li>
                        </ul>
                      </div>
                      <Link
                        href="https://admission.cvsu.edu.ph/"
                        target="_blank"
                      >
                        <Button className="mb-2">
                          Create Application Account
                        </Button>
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                          href="https://admission.cvsu.edu.ph/"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
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
                      <h4 className="text-xl font-bold">Requirements</h4>
                      <p className="mt-2 mb-3">
                        <span className="font-bold">NOTE:</span> All documentary
                        requirements must be signed by the authorized school
                        personnel only.
                      </p>
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
                      <h4 className="text-xl font-bold">
                        Attachment of requirements (Admission Portal)
                      </h4>
                      <p className="mt-2 mb-3">
                        Applicants will scan (or screenshot) and upload all the
                        documentary requirements in the online admission system.
                      </p>
                      <div className="bg-white p-4 rounded-md border mb-3">
                        <h5 className="font-bold mb-2">
                          Please take note of the following:
                        </h5>
                        <ul className="space-y-1 list-disc pl-5">
                          <li>
                            The 2x2 ID photo (in white background) file size
                            must be at most 10kb
                          </li>
                          <li>
                            Screenshot of the documentary requirement using a
                            cellphone is allowed
                          </li>
                          <li>
                            Each documentary requirement is limited to 1MB
                            (1024KB) in size only
                          </li>
                          <li>
                            The file type of each documentary requirement must
                            be either JPEG/PNG/BMP type
                          </li>
                          <li>Upload the scanned pages individually</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Appointment Schedule
                      </h4>
                      <p className="mt-2 mb-3">
                        The applicant will select the prefered and next
                        available date and time for the onsite validation of
                        requirements and save the schedule from the online
                        admission system. It is important to save the schedule
                        to generate a{" "}
                        <span className="font-bold text-primary">
                          CONTROL NUMBER
                        </span>{" "}
                        assigned to them. <br />
                      </p>
                      <span className="mb-4 mt-6 font-semibold">
                        NOTE: Once the validation appointment has been saved,
                        the information details cannot be edited again.
                      </span>
                      <p className="mt-2 mb-3">
                        On the appointment date, the applicant will present the
                        original copies of the documentary requirements at the{" "}
                        <span className="font-bold text-primary">
                          New Building, 3rd Floor, CvSU Bacoor City Campus.
                        </span>
                      </p>
                      <span className="mb-4 mt-6 font-semibold">
                        Only applicants who are scheduled on the particular date
                        and time will be accommodated.{" "}
                        <span className="font-semibold text-primary">
                          STRICTLY NO WALK-INS.
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      5
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">
                        Schedule of Admission Exam
                      </h4>
                      <p className="mt-2 mb-3">
                        Once the application has been validated by the Admission
                        Officer, the applicant will be scheduled to take the
                        Admission Examination (on-site). The applicant must{" "}
                        <span className="font-semibold text-primary">
                          download and print the Exam Permit
                        </span>{" "}
                        from the Online Admission System after validation and
                        bring the printed copy on the examination day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="animate-element">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Application Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold">Online Application</p>
                      <p>October 15, 2025</p>
                    </div>
                    <div>
                      <p className="font-bold">Deadline</p>
                      <p>April 16, 2026</p>
                    </div>
                    <div>
                      <p className="font-bold">Onsite Validation</p>
                      <p>October 20, 2025</p>
                    </div>
                    <div>
                      <p className="font-bold">Deadline</p>
                      <p>April 16, 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-element">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Our admissions team are here to assist you throughout the
                    application process.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>cvsubacoor.admission@cvsu.edu.ph</p>
                    </div>
                    <div>
                      <p className="font-medium">Telephone:</p>
                      <p>(046) 476-5029</p>
                    </div>
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p>Monday-Thursday, 7:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
}
