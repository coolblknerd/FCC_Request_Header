REQUEST HEADER PARSER MICROSERVICE
----------------------------------
Create a request header parser microservice that returns the IP addresss, 
language and the OS of the users browser.

USER STORIES
------------
*I can get the IP address, language and operating system for my browser.

NOTES
-----

12-10-16

I'm not going to need to render a html page so I'm jut going to send the json 
results through the response.

I had to use the request-ip module to get the client's IP address.  From what
I've researched there aren't any options (at least, forseeable) for me to get 
the client's address.  This module has a 'getClientIp' method which makes it a 
bit easier for me to pull that info in.

After doing some research I've discovered I can use the 
"reg.get('x-forwarded-for')" method to get the client's IP.  Typically, the 
'x-forwarded-for' is reserved for proxy servers, however, it appears that since
there isn't a proxy the request just uses the client's ip address instead.

I was able to capture the language and the software by using the get method on
the request and slicing out the specific info needed.