import {
  addEmps,
  addEmp,
  createAddEmp,
  updateAddEmp,
  deleteAddEmp,
} from './addEmps'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addEmps', () => {
  scenario('returns all addEmps', async (scenario) => {
    const result = await addEmps()

    expect(result.length).toEqual(Object.keys(scenario.addEmp).length)
  })

  scenario('returns a single addEmp', async (scenario) => {
    const result = await addEmp({ id: scenario.addEmp.one.id })

    expect(result).toEqual(scenario.addEmp.one)
  })

  scenario('creates a addEmp', async () => {
    const result = await createAddEmp({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a addEmp', async (scenario) => {
    const original = await addEmp({ id: scenario.addEmp.one.id })
    const result = await updateAddEmp({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a addEmp', async (scenario) => {
    const original = await deleteAddEmp({ id: scenario.addEmp.one.id })
    const result = await addEmp({ id: original.id })

    expect(result).toEqual(null)
  })
})
