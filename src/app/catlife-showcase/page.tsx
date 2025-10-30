/**
 * Catlife Design System Showcase
 * 
 * Interactive demonstration of all atomic components
 */

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import {
  CatlifeButton,
  CatlifeInput,
  CatlifeBadge,
  CatlifeCard,
  CatlifeCardHeader,
  CatlifeCardTitle,
  CatlifeCardDescription,
  CatlifeCardContent,
  CatlifeIconButton,
  CatlifeSelect,
  CatlifeFormContainer,
  CatlifePaginationDots,
  CatlifeCheckboxItem,
} from "@/components/ui/catlife"

export default function CatlifeShowcasePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [checkboxStates, setCheckboxStates] = useState({
    consultas: true,
    exames: false,
    vacinas: true,
  })

  return (
    <div className="min-h-screen bg-[#FFFAF3] p-8">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="font-[family-name:var(--font-primary)] text-6xl font-bold leading-tight text-[#161616]">
            Catlife Design System
          </h1>
          <p className="font-[family-name:var(--font-primary)] text-xl text-[#78716C]">
            Atomic Components Showcase
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Buttons
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-[#161616]">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <CatlifeButton variant="primary">Primary</CatlifeButton>
                <CatlifeButton variant="secondary">Secondary</CatlifeButton>
                <CatlifeButton variant="outline">Outline</CatlifeButton>
                <CatlifeButton variant="ghost">Ghost</CatlifeButton>
                <CatlifeButton variant="link">Link</CatlifeButton>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-[#161616]">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <CatlifeButton size="sm">Small</CatlifeButton>
                <CatlifeButton size="md">Medium</CatlifeButton>
                <CatlifeButton size="lg">Large</CatlifeButton>
                <CatlifeButton size="icon">
                  <Menu className="h-5 w-5" />
                </CatlifeButton>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Buttons Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Icon Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <CatlifeIconButton variant="primary" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </CatlifeIconButton>
            <CatlifeIconButton variant="primary" size="md">
              <ChevronRight className="h-5 w-5" />
            </CatlifeIconButton>
            <CatlifeIconButton variant="secondary" size="lg">
              <Menu className="h-6 w-6" />
            </CatlifeIconButton>
            <CatlifeIconButton variant="outline" size="xl">
              <Menu className="h-7 w-7" />
            </CatlifeIconButton>
            <CatlifeIconButton variant="ghost" size="md">
              <Menu className="h-5 w-5" />
            </CatlifeIconButton>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Badges
          </h2>
          <div className="flex flex-wrap gap-4">
            <CatlifeBadge variant="success">-10%</CatlifeBadge>
            <CatlifeBadge variant="primary">-20%</CatlifeBadge>
            <CatlifeBadge variant="secondary">-30%</CatlifeBadge>
            <CatlifeBadge variant="outline">-40%</CatlifeBadge>
            <CatlifeBadge variant="success" size="sm">
              Small
            </CatlifeBadge>
            <CatlifeBadge variant="primary" size="lg">
              Large
            </CatlifeBadge>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Cards
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <CatlifeCard variant="primary" size="md">
              <CatlifeCardHeader>
                <CatlifeCardTitle>RonRon</CatlifeCardTitle>
                <CatlifeCardDescription>
                  Cuidados de rotina com mais economia
                </CatlifeCardDescription>
              </CatlifeCardHeader>
              <CatlifeCardContent>
                <div className="flex items-center gap-1">
                  <span className="font-[family-name:var(--font-primary)] text-5xl font-bold text-[#161616]">
                    R$39
                  </span>
                  <span className="font-[family-name:var(--font-primary)] text-base text-[#161616]">
                    / mês
                  </span>
                </div>
              </CatlifeCardContent>
            </CatlifeCard>

            <CatlifeCard variant="secondary" size="md" hover>
              <CatlifeCardHeader>
                <CatlifeCardTitle>Purrfeito</CatlifeCardTitle>
                <CatlifeCardDescription>
                  Plano ideal para seu gato
                </CatlifeCardDescription>
              </CatlifeCardHeader>
              <CatlifeCardContent>
                <div className="flex items-center gap-1">
                  <span className="font-[family-name:var(--font-primary)] text-5xl font-bold text-[#161616]">
                    R$79
                  </span>
                  <span className="font-[family-name:var(--font-primary)] text-base text-[#161616]">
                    / mês
                  </span>
                </div>
              </CatlifeCardContent>
            </CatlifeCard>

            <CatlifeCard variant="light" size="md">
              <CatlifeCardHeader>
                <CatlifeCardTitle>Miaugnífico</CatlifeCardTitle>
                <CatlifeCardDescription>
                  Cobertura completa
                </CatlifeCardDescription>
              </CatlifeCardHeader>
              <CatlifeCardContent>
                <div className="flex items-center gap-1">
                  <span className="font-[family-name:var(--font-primary)] text-5xl font-bold text-[#161616]">
                    R$139
                  </span>
                  <span className="font-[family-name:var(--font-primary)] text-base text-[#161616]">
                    / mês
                  </span>
                </div>
              </CatlifeCardContent>
            </CatlifeCard>
          </div>
        </section>

        {/* Form Elements Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Form Elements
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-[#161616]">Input</h3>
              <CatlifeInput placeholder="Nome do seu pet" />
              <CatlifeInput placeholder="E-mail" error />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-[#161616]">Select</h3>
              <CatlifeSelect>
                <option>Belo Horizonte - MG</option>
                <option>São Paulo - SP</option>
                <option>Rio de Janeiro - RJ</option>
              </CatlifeSelect>
            </div>
          </div>
        </section>

        {/* Form Container Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Form Container
          </h2>
          <div className="flex justify-center">
            <CatlifeFormContainer title="Encontre a opção ideal">
              <CatlifeInput placeholder="Nome do seu pet" />
              <CatlifeButton variant="primary" className="w-full">
                Vamos lá
              </CatlifeButton>
            </CatlifeFormContainer>
          </div>
        </section>

        {/* Pagination Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Pagination Dots
          </h2>
          <div className="flex justify-center">
            <CatlifePaginationDots
              total={5}
              current={currentSlide}
              onDotClick={setCurrentSlide}
            />
          </div>
        </section>

        {/* Checkbox Items Section */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-primary)] text-4xl font-bold text-[#161616]">
            Checkbox Items
          </h2>
          <div className="space-y-4">
            <CatlifeCheckboxItem
              label="Consultas"
              variant="success"
              checked={checkboxStates.consultas}
              onChange={(e) =>
                setCheckboxStates((prev) => ({
                  ...prev,
                  consultas: e.target.checked,
                }))
              }
            />
            <CatlifeCheckboxItem
              label="Exames"
              variant="primary"
              checked={checkboxStates.exames}
              onChange={(e) =>
                setCheckboxStates((prev) => ({
                  ...prev,
                  exames: e.target.checked,
                }))
              }
            />
            <CatlifeCheckboxItem
              label="Vacinas"
              variant="secondary"
              checked={checkboxStates.vacinas}
              onChange={(e) =>
                setCheckboxStates((prev) => ({
                  ...prev,
                  vacinas: e.target.checked,
                }))
              }
            />
          </div>
        </section>
      </div>
    </div>
  )
}
