# Changelog

## [v5.5.2](../../compare/v5.5.1...v5.5.2) (2020-06-03)

* Dropping is-promise helper, bundlers don't know have utils.types...
* Updating changelog.

## [v5.5.1](../../compare/v5.5.0...v5.5.1) (2020-06-03)

* Dropping is-pending from index as bundlers don't support...
* Updating changelog.

## [v5.5.0](../../compare/v5.4.1...v5.5.0) (2020-06-03)

* Exporting helpers in index.
* Adding random-of-normal-distribution.
* Updating changelog.

## [v5.4.1](../../compare/v5.4.0...v5.4.1) (2020-05-29)

* Making sure bunyan output has single string `msg` prop.
* Updating changelog.

## [v5.4.0](../../compare/v5.3.0...v5.4.0) (2020-05-26)

* Adding serial-queue-of helper.
* Bumping npms.
* Updating jest libdef.
* Updating changelog.

## [v5.3.0](../../compare/v5.2.0...v5.3.0) (2020-05-06)

* Adding shuffle.
* Updating changelog.

## [v5.2.0](../../compare/v5.1.0...v5.2.0) (2020-05-05)

* Bumping npms; adding support for `npm run update`.
* Adding maybe-last-of.
* Updating changelog.

## [v5.1.0](../../compare/v5.0.1...v5.1.0) (2020-04-22)

* Adding retry.
* Updating changelog.

## [v5.0.1](../../compare/v5.0.0...v5.0.1) (2020-04-05)

* Thow in args/string if default not provided and arg is not present.
* Updating changelog.

## [v5.0.0](../../compare/v4.4.0...v5.0.0) (2020-04-05)

* Bumping npms.
* Moving flag-of-* to argv/, updating api.
* Updating changelog.

## [v4.4.0](../../compare/v4.3.0...v4.4.0) (2020-02-25)

* Adding has-keys helper.
* Updating changelog.

## [v4.3.0](../../compare/v4.2.0...v4.3.0) (2020-02-23)

* Bumping npms.
* Adding json-of-url.
* Adding last-of.
* Adding first-of.
* Adding $ReturnPromised utility type that extracts inner type of...
* Adding $Promised utility type that extracts type of promise.
* Adding $Return utility type that extracts return type of a function.
* Updating changelog.

## [v4.2.0](../../compare/v4.1.0...v4.2.0) (2020-01-07)

* Silent flow error temporarily.
* Bumping npms.
* Updating changelog.

## [v4.1.0](../../compare/v4.0.0...v4.1.0) (2019-12-20)

* Adding inc helper.
* Adding is-nil helper.
* Adding fibonacci-of helper.
* Updating changelog.

## [v4.0.0](../../compare/v3.4.0...v4.0.0) (2019-12-12)

* Fixing reject timeout promise leak.
* Using new hex0x-of-unsigned name.
* Renaming hex0x-of-number to hex0x-of-unsigned.
* Updating changelog.

## [v3.4.0](../../compare/v3.3.0...v3.4.0) (2019-12-12)

* Adding timeout-of helper.
* Updating changelog.

## [v3.3.0](../../compare/v3.2.1...v3.3.0) (2019-12-12)

* Adding note on reject-timeout.
* Adding race-promises helper.
* Rearranging test to run linter first, adding BigInt as global to eslint.
* Adding poor-man's big-int hack around flow not supporting bigint yet.
* Adding buffer-of-unsigned helper.
* Renaming hex-of-number to hex-of-unsigned.
* Reusing hex-of-number helper to return correctly odd-padded hex.
* Using padding helper in hex-of-number.
* Updating buffer-of-hex/hex0x helpers to work correctly on odd strings.
* Adding even-zero-padded-of helper.
* Adding hex-of-number helper.
* Adding is-safe-unsigned helper.
* Updating changelog.

## [v3.2.1](../../compare/v3.2.0...v3.2.1) (2019-12-03)

* Bumping npms.
* Updating changelog.

## [v3.2.0](../../compare/v3.1.1...v3.2.0) (2019-11-28)

* Updating speculative nonce tests to work on real addresses.
* Updating speculative nonce to work on checksum addresses.
* Adding checksum-address-of-address helper.
* Adding tests around speculative nonce.
* Lowering speculative nonce timeout from 1m to 12s.
* Updating changelog.

## [v3.1.1](../../compare/v3.1.0...v3.1.1) (2019-11-06)

* Bumping flow.
* Adding web-socket-ready-state helper.
* Updating type for indexed-by-key as flow has problems with nulls.
* Updating changelog.

## [v3.1.0](../../compare/v3.0.2...v3.1.0) (2019-09-10)

* Switching from `JSON.stringify` to `inspect` on default logger...
* Updating changelog.

## [v3.0.2](../../compare/v3.0.1...v3.0.2) (2019-08-21)

* Dropping auto doc generation, it's broken on some files.

## [v3.0.1](../../compare/v3.0.0...v3.0.1) (2019-08-21)

* No changes.

## [v3.0.0](../../compare/v2.10.0...v3.0.0) (2019-08-21)

* Updating npms. Adding docs/* to eslint ignore.
* Updating types of indexed-by-key.
* Changing predicate on once-if/result-of-predicate to single value.
* Updating changelog and readme.

## [v2.10.0](../../compare/v2.9.0...v2.10.0) (2019-08-13)

* Adding object-of-strings helper.
* Updating changelog and readme.

## [v2.9.0](../../compare/v2.8.5...v2.9.0) (2019-08-13)

* Loosening no-param-reassign linter rule.
* Adding `docs` to gitignore.
* Adding indexed-by-key helper.
* Updating changelog and readme.

## [v2.8.5](../../compare/v2.8.4...v2.8.5) (2019-08-08)

* Fixing once-if helper.

## [v2.8.4](../../compare/v2.8.3...v2.8.4) (2019-08-08)

* Adding once-if helper.
* Adding result-of-predicate helper.
* Adding once helper.

## [v2.8.3](../../compare/v2.8.2...v2.8.3) (2019-08-07)

* Adding catch-of helper.

## [v2.8.2](../../compare/v2.8.1...v2.8.2) (2019-08-07)

* Adding stop-of-monitor.

## [v2.8.1](../../compare/v2.8.0...v2.8.1) (2019-08-02)

* Adding has helper.
* Adding keys-of helper.
* Updating sorted-keys helper.
* Adding json-of-file helper.

## [v2.8.0](../../compare/v2.7.0...v2.8.0) (2019-07-01)

* Adding kind-of-json-rpc-2.0 helper.
* Adding is-plain-object-shallow helper.
* Adding is-null helper.
* Adding is-finite helper.

## [v2.7.0](../../compare/v2.6.4...v2.7.0) (2019-06-27)

* Adding eventually-true helper.

## [v2.6.4](../../compare/v2.6.3...v2.6.4) (2019-06-14)

* Linter fixes.

## [v2.6.3](../../compare/v2.6.2...v2.6.3) (2019-05-29)

* Revert memory leak fix.

## [v2.6.2](../../compare/v2.6.1...v2.6.2) (2019-05-23)

* Minimal memory leak fix for postJson().
* Register error handler to mute those events.

## [v2.6.1](../../compare/v2.6.0...v2.6.1) (2019-05-15)

* Adding missing retryDelay.

## [v2.6.0](../../compare/v2.5.0...v2.6.0) (2019-05-15)

* Updating retry for post-json.

## [v2.5.0](../../compare/v2.4.0...v2.5.0) (2019-05-11)

* Adding timeout and retry on post-json and post-json-rpc.

## [v2.4.0](../../compare/v2.3.7...v2.4.0) (2019-05-09)

* Post-json retry, keep alive params update, speculative nonce weakened...
* Updating meta api.
* Adding generic weak map metadata decorator.
* Use json in console log, not inspect.
* Unref timeouts in speculative-nonce.

## [v2.3.7](../../compare/v2.3.6...v2.3.7) (2019-05-08)

* Initialise timeout ids.

## [v2.3.6](../../compare/v2.3.5...v2.3.6) (2019-05-07)

* Allow empty string as hex/hex0x.

## [v2.3.5](../../compare/v2.3.4...v2.3.5) (2019-05-07)

* Fixing typo.

## [v2.3.4](../../compare/v2.3.3...v2.3.4) (2019-05-07)

* Adding checksum-address-of-public/private-key helpers.

## [v2.3.3](../../compare/v2.3.2...v2.3.3) (2019-05-07)

* No changes.

## [v2.3.2](../../compare/v2.3.1...v2.3.2) (2019-05-07)

* Adding checksum-address-of-buffer helper.

## [v2.3.1](../../compare/v2.3.0...v2.3.1) (2019-05-06)

* Adding address-of-private-key helper.
* Run tests before publish.

## [v2.3.0](../../compare/v2.2.2...v2.3.0) (2019-05-02)

* Refining err, adding err-of helper.

## [v2.2.2](../../compare/v2.2.1...v2.2.2) (2019-04-27)

* Adding hash-of-signature helper.
* Adding sh-sync helper.
* Ignore wip in jest.
* Fixing types in map-path and map-values.

## [v2.2.1](../../compare/v2.2.0...v2.2.1) (2019-04-26)

* Adding line(s)-of-buffer helpers.
* Adding map-path and other helpers.

## [v2.2.0](../../compare/v2.1.5...v2.2.0) (2019-04-24)

* Adding default key of for majority-of-array helper.
* Adding expiry-set helper.
* Adding array-of helper.

## [v2.1.5](../../compare/v2.1.4...v2.1.5) (2019-04-16)

* Adding majority-of-array helper.

## [v2.1.4](../../compare/v2.1.3...v2.1.4) (2019-04-16)

* Adding is-block-number-or-tag helper.
* Adding is-address helper.

## [v2.1.3](../../compare/v2.1.2...v2.1.3) (2019-04-16)

* Adding `npm run patch` script.
* Adding is-boolean helper.
* Type annotation for latest-block-of-url.
* Adding block type.
* Adding transaction type.

## [v2.1.2](../../compare/v2.1.1...v2.1.2) (2019-04-11)

* Adding latest-block-of-url helper.

## [v2.1.1](../../compare/v2.1.0...v2.1.1) (2019-04-09)

* Adding optional timeout to height-of.
* Adding height-of helper.
* Adding is-defined helper.

## [v2.1.0](../../compare/v2.0.7...v2.1.0) (2019-04-09)

* Couple of updates.
* Adding random-uint32 helper.
* Adding majority-of-number helper.

## [v2.0.7](../../compare/v2.0.6...v2.0.7) (2019-04-09)

* Adding buffer32-of-number helper.
* Adding is-uint32 helper.
* Adding type annotations to keccak256-of-buffer helper.
* Adding agent to post-json.
* Adding default-agent-of-url helper.
* Adding default-https-agent.
* Adding request-of-url helper.
* Adding is-object and is-undefined helpers.
* Moving is-safe-natural to is-safe-non-negative and is-safe-positive.
* Renaming flag-of-bool-type to flag-of-boolean, updating doc.
* Updating documentation.
* Adding api doc.
* Adding default-http-agent object.
* Adding integer-of-string helper.
* Adding boolean-of-string helper.
* Adding log-of helper.

## [v2.0.6](../../compare/v2.0.5...v2.0.6) (2019-04-03)

* Readme update.
* Updating readme.
* Weaken is-hex helper to allow for `0x` and `0xf`.
* Adding number-of-hex0x helper.
* Adding hex0x-of-number helper.

## [v2.0.5](../../compare/v2.0.4...v2.0.5) (2019-04-03)

* Adding hex0x-of-buffer helper.
* Adding timing test for each-promise helper test.
* Adding each-promise helper.

## [v2.0.4](../../compare/v2.0.3...v2.0.4) (2019-03-17)

* Include 0xff in uuid hex cache.

## [v2.0.3](../../compare/v2.0.2...v2.0.3) (2019-03-12)

* Fixing uuid generator.
* Adding test to gitignore.

## [v2.0.2](../../compare/v2.0.1...v2.0.2) (2019-03-12)

* Changing to hardcoded indices in uuid-v4 helper.
* Adding support for both pbkdf2 and scrypt in keythereum helper.
* Updating scrypt key derivation function, dropping memory output.
* Adding pbkdf2 key derivation function.

## [v2.0.1](../../compare/v2.0.0...v2.0.1) (2019-03-11)

* Use npm ignore.

## [v2.0.0](../../compare/v1.0.5...v2.0.0) (2019-03-11)

* Fixing scrypt helper.
* Adding typed scrypt placeholder until it's typed by flow.
* Dropping combined export.
* Splitting flag into dedicated helpers per type.

## [v1.0.5](../../compare/v1.0.4...v1.0.5) (2019-03-08)

* Fixing address of public key (last 20 bytes, not first 20 bytes).
* Fixing uuid (missed 2 bytes).

## [v1.0.4](../../compare/v1.0.3...v1.0.4) (2019-03-07)

* Adding missing salt in keythereum.

## [v1.0.3](../../compare/v1.0.2...v1.0.3) (2019-03-07)

* Adding keythereum-of helper.
* Adding address of public key helper.
* Adding scrypt-of helper.
* Adding uuid-v4 helper.
* Adding public key of private key helper.
* Adding hex-of-byte helper.
* Adding hex-of-buffer helper.
* Adding is-like-date-string helper.
* Switch to unrolled, u32 version of keccak256.
* Adding keccak256-of-buffer helper.

## [v1.0.2](../../compare/v1.0.1...v1.0.2) (2019-03-05)

* Adding buffer-of-* helpers.

## [v1.0.1](../../compare/v1.0.0...v1.0.1) (2019-03-05)

* Adding is-unique helper.

## [v1.0.0](../../compare/v0.0.2...v1.0.0) (2019-03-05)

* Renaming helpers from fast* to sorted* to better reflect their usage.
* Adding fast-difference helper.
* Adding sorted-keys helper. Aligning cmp with Array#sort comparision...
