import development from './development'
import local from './local'

const ENVS = {
  development: 'development',
  local: 'local',
}

let config = {

}

switch(process.env.REACT_APP_ENV) {
  case ENVS.local:
    config = local
    break
  case ENVS.development:
    config = development
    break
  default:
    config = local
    break
}

export default config
