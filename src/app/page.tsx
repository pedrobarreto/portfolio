"use client";

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Section } from "@/components/ui/section";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import { GlobeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { RESUME_DATA_PT } from "@/data/resume-data-pt";
import { TabsComponent } from "@/components/tabs-component";

const translations = {
  en: {
    about: "About",
    workExperience: "Work Experience",
    education: "Education",
    skills: "Skills",
  },
  pt: {
    about: "Sobre",
    workExperience: "Experiência Profissional",
    education: "Educação",
    skills: "Stacks",
  },
};

export default function Page() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const RESUME = language === 'pt' ? RESUME_DATA_PT : RESUME_DATA;
  const t = translations[language];

  return (
    <body className={`${darkMode && 'dark'}`}>
      <Header />
      <main className={`container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16`}>
        <section id="aboutMe" className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME.name}</h1>
              <p className="max-w-52 md:max-w-sm text-xs md:text-sm font-mono text-pretty  text-muted-foreground">
                {RESUME.about}
              </p>
              <p className="max-w-md items-center text-pretty  text-xs text-muted-foreground">
                <a
                  className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                  href={RESUME.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME.location}
                </a>
              </p>
              <div className="flex gap-x-1 pt-1  text-sm text-muted-foreground print:hidden">
                {RESUME.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`mailto:${RESUME.contact.email}`}>
                      <MailIcon className="size-4" />
                    </a>
                  </Button>
                ) : null}
                {RESUME.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                ))}
              </div>
              <div className="hidden flex-col gap-x-1  text-sm text-muted-foreground print:flex">
                {RESUME.contact.email ? (
                  <a href={`mailto:${RESUME.contact.email}`}>
                    <span className="underline">{RESUME.contact.email}</span>
                  </a>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME.name} src={RESUME.avatarUrl} />
              <AvatarFallback>{RESUME.initials}</AvatarFallback>
            </Avatar>
          </div>
          <Section>
            <h2 className="text-xl font-bold">{t.about}</h2>
            {RESUME.summary.split('\n').map((line, index) => (
              <p className="text-pretty font-mono text-xs md:text-sm text-justify text-muted-foreground" key={index}>
                {line}
              </p>
            ))}
          </Section>
          <Section id="workExperience">
            <h2 className="text-xl font-bold">{t.workExperience}</h2>
            {RESUME.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {work.start} - {work.end}
                      </div>
                    </div>
                    <h4 className=" text-sm leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-3 mb-3 text-xs leading-relaxed">
                    {work.description.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section id="education">
            <h2 className="text-xl font-bold">{t.education}</h2>
            {RESUME.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                      <div className="text-sm tabular-nums text-gray-500">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-3 mb-3 text-xs">
                    {education.degree.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
          <Section>
            <h2 className="mb-3 text-xl font-bold">{t.skills}</h2>
            <div className="mb-3 flex flex-wrap gap-1">
              {RESUME.skills.map((skill) => {
                return <Badge key={skill}>{skill}</Badge>;
              })}
            </div>
          </Section>
          <TabsComponent />
        </section>
      </main>
    </body>
  );
}
