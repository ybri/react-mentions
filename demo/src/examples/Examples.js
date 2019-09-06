import Radium from 'radium'
import React from 'react'
import { EnhancerProvider } from 'substyle'

import Advanced from './Advanced'
import AsyncGithubUserMentions from './AsyncGithubUserMentions'
import CssModules from './CssModules'
import Emojis from './Emojis'
import ExperimentalCutCopyPaste from './ExperimentalCutCopyPaste'
import MultipleTrigger from './MultipleTrigger'
import Scrollable from './Scrollable'
import SingleLine from './SingleLine'
import SingleLineIgnoringAccents from './SingleLineIgnoringAccents'
import SuggestionPortal from './SuggestionPortal'

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  },
  {
    id: 'gus',
    display: 'Gustavo "Gus" Fring',
  },
  {
    id: 'saul',
    display: 'Saul Goodman',
  },
  {
    id: 'hank',
    display: 'Hank Schrader',
  },
  {
    id: 'skyler',
    display: 'Skyler White',
  },
  {
    id: 'mike',
    display: 'Mike Ehrmantraut',
  },
  {
    id: 'lydia',
    display: 'Lydìã Rôdarté-Qüayle'
  }
]

export default function Examples() {
  return (
    <EnhancerProvider enhancer={Radium}>
      <div>
        <MultipleTrigger data={users} />
        <SingleLine data={users} />
        <SingleLineIgnoringAccents data={users} />
        <Scrollable data={users} />
        <Advanced data={users} />
        <ExperimentalCutCopyPaste data={users} />
        <CssModules data={users} />
        <AsyncGithubUserMentions data={users} />
        <Emojis data={users} />
        <SuggestionPortal data={users} />
      </div>
    </EnhancerProvider>
  )
}
