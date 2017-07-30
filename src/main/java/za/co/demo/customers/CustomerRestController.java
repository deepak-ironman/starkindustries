package za.co.demo.customers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RestController
public class CustomerRestController {
	
	@Autowired
	CustomerService customerService;

	@RequestMapping(method=RequestMethod.GET, value="/customers")
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/customers/{id}")
	public Customer getCustomer(@PathVariable Long id) {
		return customerService.getCustomer(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/customers")
	public void addCustomer(@RequestBody Customer customer) {
		customerService.addCustomer(customer);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/customers/{id}")
	public void updateCustomer(@RequestBody Customer customer) {
		customerService.updateCustomer(customer);;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/customers/{id}")
	public void deleteCustomer(@PathVariable Long id) {
		customerService.deleteCustomer(id);
	}
	
	
	/*@RequestMapping("/names")
	public List<Customer> getAllCustomers() {
		return Arrays.asList(
				new Customer(Long.valueOf("1"), "Tony", "Stark", "USA"),
				new Customer(Long.valueOf("2"), "Bruce", "Wayne", "UK"),
				new Customer(Long.valueOf("3"), "Clark", "Kent", "SA")
		);
	}*/
	
	
	/*@RequestMapping("/names")
	public String getAllCustomers() {
		return "All names";
	}*/
}