package com.in28minutes.rest.webservices.restfulwebservices.helloworld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
//controller
@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class HelloWorldController {
	
	
	//@RequestMapping(method=RequestMethod.GET,path="/hello-world")
	@GetMapping(path="/hello-world")
	public String helloWorld() {
		
		return "Hello World";
	}
	
	//hello-world-bean
		@GetMapping(path="/hello-world-bean")
		public HelloWorldBean helloWorldBean() {
			
			return new HelloWorldBean ("Hello World ");
		}
		//hello-world/path-variable/{name}
		@GetMapping(path="/hello-world/path-variable/{name}")
		public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
			//throw new RuntimeException("Something went wrong");
			return new HelloWorldBean (String.format("Hello World, %s", name));
		}

}
