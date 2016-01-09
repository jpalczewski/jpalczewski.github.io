---
layout: post
title:  "Databases and python #1"
date:   2016-01-03 17:56:10 +0100
categories: general
---

Few thoughts from [NFZQueueViewer](https://github.com/jpalczewski/NFZQueueViewer) project.

 - What happens when you plan that name from one column wouldn't exceed size of 100 chars?
{% highlight text %}
NIEPUBLICZNY ZAKŁAD OPIEKI ZDROWOTNEJ SANATORIUM UZDROWISKOWE "KRYSTYNKA" W CIECHOCINKU UTWORZONY PRZEZ OŚRDEK WCZASOWO-PROFILAKTYCZNY "KRYSTYNKA" SANATORIUM UZDROWISKOWE "KRYSTYNKA" SP. Z O.O. W CIECHOCINKU 	208
{% endhighlight %}
 - And why exception-based code in python is bad:

{% highlight ruby %}
def parrse_date(s):
    try:
        datetime.datetime.strptime(s, '%Y-%m-%d')
    except ValueError:
        return '1970-01-01'
    except TypeError:
        return s

def parse_date2(s):
    if type(s)==str:
        return '1970-01-01'
    else:
        return s

>>> print(timeit.timeit("parse_date('1970-01-01')", setup="from __main__ import parse_date"))
31.87844313700043
>>> print(timeit.timeit("parse_date2('1970-01-01')", setup="from __main__ import parse_date2"))
0.3313458009943133
{% endhighlight %}
