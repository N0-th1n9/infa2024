import { IProject } from '../../pages/Projects'
import Button from '../UI/Button'
import { MdDelete } from '@react-icons/all-files/md/MdDelete'
import { MdModeEdit } from '@react-icons/all-files/md/MdModeEdit'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IClientContainer {
  project: IProject
  withBtn?: boolean
  getClientById?: (id: number) => void
}

const ProjectContainer: FC<IClientContainer> = ({
  project,
  withBtn = true,
  getClientById,
}) => {
  return (
    <div className='border border-gray-400 bg-white shadow-mainShadow rounded-lg px-4 py-2 h-full flex justify-between flex-col'>
      <div className='flex flex-col gap-2'>
        <span>
          id: <span className='text-mainRed'>{project.id}</span>
        </span>
        <span>
          name: <span className='text-mainRed'>{project.name}</span>
        </span>
        <div>
          <span>description:</span>
          <p className='text-sm text-mainRed'>{project.description}</p>
        </div>
        <div className='flex flex-col'>
          <span>
            Date start: <span className='text-mainRed'>{project.date_start}</span>
          </span>
          <span>
            Date end: <span className='text-mainRed'>{project.date_end}</span>
          </span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-3'>
        {withBtn ? (
          <Button
            text='Go to client'
            type='button'
            handlerClick={() => getClientById?.(project.id)}
          />
        ) : (
          ''
        )}
        <div className='flex gap-4'>
          <Link to='/client/edit/:id'>
            <MdModeEdit size={27} />
          </Link>
          <button>
            <MdDelete size={27} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectContainer
