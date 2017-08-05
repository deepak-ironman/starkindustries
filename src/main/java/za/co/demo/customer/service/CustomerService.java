package za.co.demo.customer.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import za.co.demo.customer.model.Customer;
import za.co.demo.customer.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
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
