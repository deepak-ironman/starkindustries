package za.co.demo.customer.repository;

import org.springframework.data.repository.CrudRepository;

import za.co.demo.customer.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
