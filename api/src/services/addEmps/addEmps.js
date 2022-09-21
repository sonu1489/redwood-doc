import { db } from 'src/lib/db'

export const addEmps = () => {
  return db.addEmp.findMany()
}

export const addEmp = ({ id }) => {
  return db.addEmp.findUnique({
    where: { id },
  })
}

export const createAddEmp = ({ input }) => {
  return db.addEmp.create({
    data: input,
  })
}

export const updateAddEmp = ({ id, input }) => {
  return db.addEmp.update({
    data: input,
    where: { id },
  })
}

export const deleteAddEmp = ({ id }) => {
  return db.addEmp.delete({
    where: { id },
  })
}
