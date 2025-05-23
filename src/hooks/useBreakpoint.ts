import { createBreakpoint } from 'react-use'
import { BREAKPOINTS } from '@/constants/config'

const _useBreakpoint = createBreakpoint(BREAKPOINTS)

// eslint-disable-next-line @eslint-react/hooks-extra/no-unnecessary-use-prefix
const useBreakpoint = () => {
  const breakpoint = _useBreakpoint() as keyof typeof BREAKPOINTS

  return {
    isSM: breakpoint === 'sm',
    isMD: breakpoint === 'md',
    isLG: breakpoint === 'lg',
    isXL: breakpoint === 'xl',
    is2XL: breakpoint === '2xl',
    breakpoint
  }
}

export default useBreakpoint
