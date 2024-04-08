'use client'
import ConnectionCard from '@/app/(main)/(pages)/connections/_components/ConnectionCard'
import { AccordionContent } from '@/components/ui/accordion'
import MultipleSelector from '@/components/ui/multipleSelector'
import { Connection } from '@/lib/types'
import { useNodeConnections } from '@/provider/connections-provider'
import { EditorState } from '@/provider/editor-provider'
import { useFuzzieStore } from '@/store'
import React from 'react'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

const RenderConnectionAccordion = ({
  connection,
  state,
}: {
  connection: Connection
  state: EditorState
}) => {
  const {
    title,
    image,
    description,
    connectionKey,
    accessTokenKey,
    alwaysTrue,
    slackSpecial,
  } = connection

  const { nodeConnection } = useNodeConnections()
  const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } =
    useFuzzieStore()

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  const connectionData = (nodeConnection as any)[connectionKey]

  const isConnected =
    alwaysTrue ||
    (nodeConnection[connectionKey] &&
      accessTokenKey &&
      connectionData[accessTokenKey!])

  return (
    <AccordionContent key={title}>
      {state.editor.selectedNode.data.title === title && (
        <>
          <ConnectionCard
            title={title}
            icon={image}
            description={description}
            type={title}
            connected={{ [title]: isConnected }}
          />
          {slackSpecial && isConnected && (
            <div className="p-6">
              {slackChannels?.length ? (
                <>
                  <div className="mb-4 ml-1">
                    Select the slack channels to send notification and messages:
                  </div>
                  <MultipleSelector
                    value={selectedSlackChannels}
                    onChange={setSelectedSlackChannels}
                    defaultOptions={slackChannels}
                    placeholder="Select channels"
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </>
              ) : (
                'No Slack channels found. Please add your Slack bot to your Slack channel'
              )}
            </div>
          )}
        </>
      )}
    </AccordionContent>
  )
}

export default RenderConnectionAccordion