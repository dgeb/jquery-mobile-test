# jquery-mobile-test

A simple test of page loading and removal. For details, see:
https://github.com/jquery/jquery-mobile/issues/2520

Please see the branches of this project to see the different behaviour.

## jquery-mobile 1.0_latest - with selective DOM caching

This branch was created after jblas landed the following fix:
https://github.com/jquery/jquery-mobile/commit/97e3f8a800a44227ceff13d1c825953a051ef782

In this branch, pages are selectively cached using the data-dom-cache attribute on each page. A custom pageshow event handler determines whether to remove the previous page. Caching should not be dependent upon which pages are embedded when the first page loads.

In this particular example, page C is the only page that should be cached.

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
