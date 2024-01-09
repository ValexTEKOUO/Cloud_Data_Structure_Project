<script>
	import { enhance } from '$app/forms';
</script>

<div class="auth-page">
	<div class="container page">
		<div class="row">
			<div class="col-md-6 offset-md-3 col-xs-12">
				<h1 class="text-xs-center">Login</h1>
				<p class="text-xs-center">
					<a href="/register">Need an account?</a>
				</p>

				<form  use:enhance method="POST">
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

					<button class="btn btn-lg btn-primary pull-xs-right" type="submit">Login</button>
				</form>
			</div>
		</div>
	</div>
</div>
