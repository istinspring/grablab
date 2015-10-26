.PHONY: clean etags pylines


clean:
find . -name "*.pyc" -print0 | xargs -0 rm -rf

etags:
find . -type f -name '*.py' | xargs etags

pylines:
( find ./ -name '*.py' -print0 | xargs -0 cat ) | wc -l
