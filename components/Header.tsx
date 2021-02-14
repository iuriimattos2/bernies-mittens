import {SITE_NAME} from '../config/index'

export default function Header(): JSX.Element {
  return (
    <header>
      <h1 className="text-sm text-gray-900 font-medium">{SITE_NAME}</h1>
    </header>
  )
}
