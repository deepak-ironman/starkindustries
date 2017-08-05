package za.co.demo;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import za.co.demo.customer.model.Customer;
import za.co.demo.customer.repository.CustomerRepository;
import za.co.demo.customer.service.CustomerService;

public class CustomerServiceTest {
	@Mock
	private CustomerRepository custRepository;
	
	@Mock
	private CustomerService custService;
	
	@Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }
	
	@Test
	public void testGetAllCustomers() {
		List<Customer> customers = Arrays.asList(
			new Customer(1L, "Tony", "Stark", "USA"),
			new Customer(2L, "Bruce", "Wayne", "England")
		);
    	
		when(custService.getAllCustomers()).thenReturn(customers);
    	List<Customer> allCustomers = custService.getAllCustomers();
		verify(custService).getAllCustomers();
    	
		assertThat(customers, is(allCustomers));
	}
	
	@Test
	public void testGetCustomer() {
    	Customer testCustomer = new Customer(1L,"Tony", "Stark", "USA");
    	Customer testCustomer2 = new Customer(2L,"Bruce", "Wayne", "England");
		when(custService.getCustomer(1L)).thenReturn(testCustomer);
		when(custService.getCustomer(2L)).thenReturn(testCustomer2);
		
		Customer wreck = custService.getCustomer(2L);
		verify(custService).getCustomer(2L);
		
		assertThat(wreck.getId(), is(2L));
	}
	
	@Test
	public void testAddCustomer() {
		Customer testCustomer = new Customer(1L,"Tony", "Stark", "USA");
		
		custService.addCustomer(testCustomer);
		verify(custService).addCustomer(testCustomer);
		
		when(custService.getCustomer(testCustomer.getId())).thenReturn(testCustomer);
		Customer returnedCustomer = custService.getCustomer(testCustomer.getId());
		verify(custService).getCustomer(testCustomer.getId());
		
		assertThat(testCustomer, is(returnedCustomer) );
	}

	@Test
	public void testDeleteCustomer() {
		Customer testCustomer = new Customer(1L,"Tony", "Stark", "USA");
		
		when(custService.getCustomer(testCustomer.getId())).thenReturn(testCustomer);
		
		custService.deleteCustomer(testCustomer.getId());
		verify(custService).deleteCustomer(testCustomer.getId());
		
		when(custService.getCustomer(testCustomer.getId())).thenReturn(null);
		Customer returnedCustomer = custService.getCustomer(testCustomer.getId());
		verify(custService).getCustomer(testCustomer.getId());
		
		assertNull(returnedCustomer);
	}
	
	@Test
	public void testUpdateCustomer() {
		Customer testCustomer = new Customer(1L,"Tony", "Stark", "USA");
		
		when(custService.getCustomer(testCustomer.getId())).thenReturn(testCustomer);
		Customer custToUpdate = custService.getCustomer(testCustomer.getId());
		custToUpdate.setName("Bruce");
		custToUpdate.setSurname("Wayne");
		custService.updateCustomer(custToUpdate);
		verify(custService).updateCustomer(custToUpdate);
		
		when(custService.getCustomer(custToUpdate.getId())).thenReturn(custToUpdate);
		Customer returnedCustomer = custService.getCustomer(custToUpdate.getId());
		assertThat(custToUpdate, is(returnedCustomer));
	}

}
