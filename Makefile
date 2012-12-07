site:
	node site

publish:
	scp -rp locomotivejs.org jaredhanson@locomotivejs.org:/home/jaredhanson

.PHONY: site publish
