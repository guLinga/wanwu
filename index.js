const obj = {
  1: '111',
  2: '222',
  3: '333'
}

const floors = [3, 1, 2]

const arrTemp = ['333', '111', '222']

{
  /* <template v-for="item of arrTemp">
  <template v-if="item === zengpin"></template>
  <template v-if="item === huiyuan"></template>
  <template></template>
  <template></template>
  <template></template>
</template> */
}

const arr = Object.keys(obj).reduce((pre, cur) => {
  pre.push(obj[cur])
  return pre
}, [])
const arr2 = Object.keys(obj).reduce((pre, cur) => {
  return [...pre, obj[cur]]
}, [])

const arr3 = Object.keys(obj).map((_, idx) => {
  return obj[floors[idx]]
})
console.log(arr3)
