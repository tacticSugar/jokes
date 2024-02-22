import dynamic from 'next/dynamic'

/** любой компонент, обернутый в NoSsr не будет рендериться */
const NoSSR = (props: { children: React.ReactNode }) => <>{props.children}</>

// ts-prune-ignore-next
export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})
