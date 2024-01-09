<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<a class="navbar-brand" href="/">Web Applications - Frontend</a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
			</li>

			<li class="nav-item">
				<a href="/location" class="nav-link" class:active={$page.url.pathname === '/location'}>
					Location
				</a>
			</li>

			<li class="nav-item">
				<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
					Sign in
				</a>
			</li>

			<li class="nav-item">
				<a href="/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
					Sign Up
				</a>
			</li>

			<li class="nav-item">
				<a href="/logout" class="nav-link" class:active={$page.url.pathname === '/logout'}>
					Logout
				</a>
			</li>
		</ul>
	</div>
</nav>