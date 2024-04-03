"use client"

import { PlusIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"
import { Tag } from "@/types"
import { getTags } from "@/app/TagService"

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Table() {

  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    getTags().then((tags) => setTags(tags))    
  }, [])

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Tags</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-blue-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            <span className="ml-1">Create tag</span>
          </button>
        </div>
      </div>
      <div className="mt-10 ring-1 ring-gray-300 shadow-sm ring-inset mx-0 bg-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200  table-auto">
          <thead className="text-gray-700 font-light">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm  sm:pl-6">
                Group and Element
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm table-cell font-regular"
              >
                Tag Description
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm table-cell"
              >
                Value Representation
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm table-cell"
              >
                Tag Length
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm">
                Tag Multiplicity
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm">
                Value
              </th>
              <th scope="col" className="px-3 py-3.5 text-center text-sm">
                Group
              </th>
              <th scope="col" className="px-3 py-3.5 text-center text-sm">
                Element
              </th>
              <th scope="col" className="px-3 py-3.5 text-center text-sm">
                Editable
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag, tagIdx) => (
              <tr key={tag.groupAndElement} className="even:bg-gray-50 odd:bg-white">
                {/* Group and Element */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                  )}
                >
                  <div className="font-medium text-gray-900">
                    {tag.groupAndElement}
                  </div>
                </td>

                {/* Tag Description */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.tagDescription}
                </td>

                {/* Value Representation */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.valueRepresentation}
                </td>

                {/* Tag Length */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm  text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.tagLength}
                </td>

                {/* Tag Multiplicity */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.tagMultiplicity}
                </td>

                {/* Value */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.value}
                </td>

                {/* Group */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-center text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.group}
                </td>

                {/* Element */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-center text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.element}
                </td>

                {/* Editable */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-center text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.editable ? 'Yes' : 'No'}
                </td>

                {/* Delete */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'relative py-3.5 pl-3 pr-4 text-sm font-medium sm:pr-6'
                  )}
                >
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-red-primary px-2.5 py-1.5 text-sm text-light text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-primary-dark focus-visible:ring focus-visible:ring-red-primary-dark focus-visible:ring-offset-2 focus-visible:ring-offset-red-primary-dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
