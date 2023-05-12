import css from './(styles)/foreground_layer.module.css'

export default function Home() {
  return (
		<>
			<div class={css.top_left}>About Me</div>
			<div class={css.top_right}>Portfolio</div>
			<div class={css.bottom_right}>Contact Me</div>
			<div class={css.bottom_left}>Skills</div>
			<div class={css.foreground_layer}></div>
		</>
  )
}
