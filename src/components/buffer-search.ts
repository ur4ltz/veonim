import { Plugin } from '../components/plugin-container'
import { connect, go } from '../state/trade-federation'
import { BufferSearch } from '../state/buffer-search'
import Input from '../components/text-input2'
import { normal } from '../core/neovim'

const view = ({ data: $ }: { data: BufferSearch }) => Plugin('buffer-search', $.visible, [

  ,Input({
    focus: true,
    value: $.value,
    icon: 'search',
    hide: go.hideBufferSearch,
    change: val => go.updateBufferSearchQuery(val),
    select: () => go.hideBufferSearch() && normal(`nN`),
  })

])

export default connect(s => ({ data: s.bufferSearch }))(view)