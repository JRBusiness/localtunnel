# 2.0.3 (2025-07-14):

- Upgrade axios dependency to latest version to prevent vulnerability and enable passthrough for first time visitor.

# 2.0.2 (2021-09-18)

- Upgrade dependencies

# 2.0.1 (2021-01-09)

- Upgrade dependencies

# 2.0.0 (2019-09-16)

- Add support for tunneling a local HTTPS server
- Add support for localtunnel server with IP-based tunnel URLs
- Node.js client API is now Promise-based, with backwards compatibility to callback
- Major refactor of entire codebase using modern ES syntax (requires Node.js v8.3.0 or above)

# 1.9.2 (2019-06-01)

- Update debug to 4.1.1
- Update axios to 0.19.0

# 1.9.1 (2018-09-08)

- Update debug to 2.6.9

# 1.9.0 (2018-04-03)

- Add _request_ event to Tunnel emitter
- Update yargs to support config via environment variables
- Add basic request logging when --print-requests argument is used

# 1.8.3 (2017-06-11)

- update request dependency
- update debug dependency
- update openurl dependency

# 1.8.2 (2016-11-17)

- fix host header transform
- update request dependency

# 1.8.1 (2016-01-20)

- fix bug w/ HostHeaderTransformer and binary data

# 1.8.0 (2015-11-04)

- pass socket errors up to top level

# 1.7.0 (2015-07-22)

- add short arg options

# 1.6.0 (2015-05-15)

- keep sockets alive after connecting
- add --open param to CLI

# 1.5.0 (2014-10-25)

- capture all errors on remote socket and restart the tunnel

# 1.4.0 (2014-08-31)

- don't emit errors for ETIMEDOUT

# 1.2.0 / 2014-04-28

- return `client` from `localtunnel` API instantiation

# 1.1.0 / 2014-02-24

- add a host header transform to change the 'Host' header in requests

# 1.0.0 / 2014-02-14

- default to localltunnel.me for host
- remove exported `connect` method (just export one function that does the same thing)
- change localtunnel signature to (port, opt, fn)

# 0.2.2 / 2014-01-09
