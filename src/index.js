import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import moment from 'moment'

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem file={file} key={file.id} />
      ))}
    </tbody>
  </table>
)

const FileListItem = ({ file }) => (
  <tr>
    <FileIcon file_type={file.type} />
    <FileName file={file.name} />
    <CommitMessage commit={file.latestCommit.message} />
    <Time time={file.updated_at} />
  </tr>
)

const Time = ({ time }) => <td className="age">{moment(time).fromNow()}</td>

const CommitMessage = ({ commit }) => <td className="commit-message">{commit}</td>

const FileIcon = ({ file_type }) => {
  let icon
  switch (file_type) {
    case 'folder':
      icon = 'fa-folder'
      break
    default:
    case 'file':
      icon = 'fa-file-text-o'
      break
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  )
}

const FileName = ({ file }) => <td className="file-name">{file}</td>

const data = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: '2020-11-07 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: '2020-11-07 21:24:00',
    latestCommit: {
      message: 'Initial commit',
    },
  },
  {
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: '2020-11-01 21:24:00',
    latestCommit: {
      message: 'Added a readme',
    },
  },
]

ReactDOM.render(
  <React.StrictMode>
    <FileList files={data} />
  </React.StrictMode>,
  document.getElementById('root')
)
