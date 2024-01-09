<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Sign Up</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Sign Up</h1>
				<p class="text-xs-center">
					<a href="/login">Have an account?</a>
				</p>

				<form use:enhance method="POST">
					<fieldset class="form-group">
						<input
								class="form-control form-control-lg"
								name="username"
								type="text"
								required
								placeholder="Username"
						/>
					</fieldset>

					<fieldset class="form-group">
						<input
								class="form-control form-control-lg"
								name="password"
								type="password"
								required
								placeholder="Password"
						/>
					</fieldset>
					<button class="btn btn-lg btn-primary pull-xs-right">Sign Up</button>
				</form>
			</div>
		</div>
	</div>
</div>