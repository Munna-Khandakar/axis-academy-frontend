import React from 'react'

const FilterOption = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-1">
      <label
        htmlFor="countries"
        className="text-sm font-medium text-gray-900"
      >
        {name}
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 "
      >
        <option selected>{`Choose a ${name}`}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  )
}

export default FilterOption