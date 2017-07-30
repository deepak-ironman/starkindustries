package za.co.demo.customers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	/*private List<Customer> customers = new ArrayList<>( Arrays.asList(
			new Customer(Long.valueOf("1"), "Tony", "Stark", "USA"),
			new Customer(Long.valueOf("2"), "Bruce", "Wayne", "UK"),
			new Customer(Long.valueOf("3"), "Clark", "Kent", "SA")
	));*/
	
	public List<Customer> getAllCustomers() {
		List<Customer> custList = new ArrayList<>();
		customerRepository.findAll()
			.forEach(custList::add);
		return custList;
	}
	
	public void addCustomer(Customer customer) {
		customerRepository.save(customer);
	}
	
	public Customer getCustomer(long id) {
		return customerRepository.findOne(id);
	}
	
	public void deleteCustomer(long id) {
		customerRepository.delete(id);;
	}
	
	public void updateCustomer(Customer customer) {
		customerRepository.save(customer);
	}

}
