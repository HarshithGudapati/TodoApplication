package com.in28minutes.rest.basic.auth;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
//controller
@CrossOrigin(origins ="http://localhost:4200")
@RestController

public class BasicAuthenticationcontroller {
	
	
		@GetMapping(path="/basicauth")
		public AuthenticationBean helloWorldBean() {
			
			return new AuthenticationBean ("you are authenticated ");
		}
		

}
