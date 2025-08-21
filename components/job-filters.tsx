"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface JobFiltersProps {
  onFilterChange: (filters: {
    search: string
    location: string
    jobType: string
  }) => void
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onFilterChange({ search: e.target.value, location, jobType })
  }

  const handleLocationChange = (value: string) => {
    setLocation(value)
    onFilterChange({ search, location: value, jobType })
  }

  const handleJobTypeChange = (value: string) => {
    setJobType(value)
    onFilterChange({ search, location, jobType: value })
  }

  const handleReset = () => {
    setSearch("")
    setLocation("")
    setJobType("")
    onFilterChange({ search: "", location: "", jobType: "" })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>

        <div className="w-full md:w-48">
          <Select value={location} onValueChange={handleLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Manila">Manila</SelectItem>
              <SelectItem value="Cebu">Cebu</SelectItem>
              <SelectItem value="Davao">Davao</SelectItem>
              <SelectItem value="Baguio">Baguio</SelectItem>
              <SelectItem value="Iloilo">Iloilo</SelectItem>
              <SelectItem value="Quezon">Quezon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-48">
          <Select value={jobType} onValueChange={handleJobTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
          <Filter size={16} />
          Reset
        </Button>
      </div>
    </div>
  )
}

