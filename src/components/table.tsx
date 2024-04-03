import { PlusIcon } from "@heroicons/react/20/solid"

const tags = [
  {
    groupAndElement: "0002,0010",
    tagDescription: "TransferSyntaxUID",
    valueRepresentation: "UI",
    tagLength: "22",
    tagMultiplicity: "1",
    value: "1.2.840.10008.1.2.4.70",
    group: 2,
    element: 16,
    editable: false
  },
  {
    groupAndElement: "0001,0008",
    tagDescription: "TransferSyntaxUID",
    valueRepresentation: "UI",
    tagLength: "22",
    tagMultiplicity: "1",
    value: "1.2.840.10008.1.2.4.70",
    group: 1,
    element: 8,
    editable: false
  },
  {
    groupAndElement: "0016,0002",
    tagDescription: "TransferSyntaxUID",
    valueRepresentation: "UI",
    tagLength: "22",
    tagMultiplicity: "1",
    value: "1.2.840.10008.1.2.4.70",
    group: 16,
    element: 2,
    editable: false
  },
  {
    groupAndElement: "0016,0002",
    tagDescription: "TransferSyntaxUID",
    valueRepresentation: "UI",
    tagLength: "22",
    tagMultiplicity: "1",
    value: "1.2.840.10008.1.2.4.70",
    group: 16,
    element: 2,
    editable: false
  },
]


const plans = [
  {
    id: 1,
    name: 'Hobby',
    memory: '4 GB RAM',
    cpu: '4 CPUs',
    storage: '128 GB SSD disk',
    price: '$40',
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Startup',
    memory: '8 GB RAM',
    cpu: '6 CPUs',
    storage: '256 GB SSD disk',
    price: '$80',
    isCurrent: false,
  },
  // More plans...
]

function classNames(...classes: (string | boolean | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Tags</h1>
          <p className="mt-2 text-sm text-gray-700">
            Your team is on the <strong className="font-semibold text-gray-900">Startup</strong> plan. The next payment
            of $80 will be due on August 4, 2022.
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
      <div className="mt-10 ring-1 ring-gray-300 shadow-sm ring-inset mx-0 bg-blue-primary rounded-lg">
        <table className="min-w-full divide-y divide-gray-300  table-auto">
          <thead className="text-gray-100 font-light">
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
              <th scope="col" className="px-3 py-3.5 text-left text-sm">
                Group
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm">
                Element
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm">
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
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
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
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  ) + ""}
                >
                  {tag.group}
                </td>

                {/* Element */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.element}
                </td>

                {/* Editable */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {tag.editable ? 'Yes' : 'No'}
                </td>

                {/* Delete */}
                <td
                  className={classNames(
                    tagIdx === 0 ? '' : 'border-t border-gray-200',
                    'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
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
