# jquery-mobile-test

A simple test of page loading and removal. For details, see:
https://github.com/jquery/jquery-mobile/issues/2520

Please see the branches of this project to see the different behaviour.

## jquery-mobile 1.0rc1 - without DOM caching

In this branch, pages are not cached and therefore shouldn't need to be removed. However, the initial page that's loaded will never be refreshed.

For example, load Page A, then Page B, and then return to Page A. You'll notice that the page loaded time doesn't change, nor does the navbar highlight.

## MIT LICENSE

Copyright (c) 2011 Dan Gebhardt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
