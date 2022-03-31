from fabric import task


@task(
    aliases=['stag'],
)
def staging(ctx):
    """
    Set staging as the active stage.
    """
    ctx._stage = 'staging'
    ctx.code_path = '~/project2021dev'
    ctx.subdomain_root = '~/subdomains/2021dev'
    ctx.venv_bin_path = '~/virtualenv/subdomains/2021dev/3.7/bin'
    ctx.passwd_path = '~/.htpasswds/2021dev/passwd'

@task(
    aliases=['prod'],
)
def production(ctx):
    """
    Set production as the active stage.
    """
    ctx._stage = 'production'
    ctx.code_path = '~/project2021'
    ctx.subdomain_root = '~/subdomains/2021'
    ctx.venv_bin_path = '~/virtualenv/subdomains/2021/3.7/bin'
    ctx.passwd_path = '~/.htpasswds/2021/passwd'
