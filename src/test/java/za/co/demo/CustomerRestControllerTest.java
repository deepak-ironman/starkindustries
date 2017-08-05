package za.co.demo;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.mock.http.MockHttpOutputMessage;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

import za.co.demo.customer.DemoApplication;
import za.co.demo.customer.controller.CustomerRestController;
import za.co.demo.customer.model.Customer;
import za.co.demo.customer.repository.CustomerRepository;
import za.co.demo.customer.service.CustomerService;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoApplication.class)
@WebAppConfiguration
public class CustomerRestControllerTest {
	
	private MediaType contentType = new MediaType(MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(),
            Charset.forName("utf8"));
	
    private MockMvc mockMvc;

    private HttpMessageConverter mappingJackson2HttpMessageConverter;
    
    private Customer customer;

    @Mock
    public CustomerService custService;
    
    @Autowired
    private CustomerRepository custRepository;
    
    //@InjectMocks
    //@Autowired
    @Mock
    public CustomerRestController custController;
    
    @Autowired
    private WebApplicationContext webApplicationContext;
    
    @Autowired
    void setConverters(HttpMessageConverter<?>[] converters) {

        this.mappingJackson2HttpMessageConverter = Arrays.asList(converters).stream()
            .filter(hmc -> hmc instanceof MappingJackson2HttpMessageConverter)
            .findAny()
            .orElse(null);

        assertNotNull("the JSON message converter must not be null",
                this.mappingJackson2HttpMessageConverter);
    }
    
    
    @Before
    public void setup() throws Exception {
        this.mockMvc = webAppContextSetup(webApplicationContext).build();
    }
    
    @Test
    public void testAddCustomer() throws Exception {
    	Customer customer = new Customer(1L, "Tony", "Stark", "USA");
        doNothing().when(custService).addCustomer(customer);
        
        custService.addCustomer(customer);
		mockMvc.perform(post("/customers")
			.contentType(contentType).content(asJson(customer)))
			.andDo(print())
			.andExpect(status().isOk());
        
        verify(custService, times(1)).addCustomer(customer);
        verifyNoMoreInteractions(custService);
    }
    
    @Test
    public void testUpdateCustomer() throws Exception {
    	Customer customer = new Customer(1L, "Tony", "Stark", "USA");
        when(custService.getCustomer(customer.getId())).thenReturn(customer);
        doNothing().when(custService).updateCustomer(customer);
        
        custService.getCustomer(customer.getId());
        custService.updateCustomer(customer);
        mockMvc.perform(
        	put("/customers/{id}", customer.getId())
                .contentType(contentType)
                .content(asJsonString(customer)))
        	.andDo(print())
        	.andExpect(status().isOk());
        
        verify(custService, times(1)).getCustomer(customer.getId());
        verify(custService, times(1)).updateCustomer(customer);
        verifyNoMoreInteractions(custService);
    }
    
    @Test
    public void testDeleteCustomer() throws Exception {
    	Customer customer = new Customer(1L, "Tony", "Stark", "USA");
        when(custService.getCustomer(customer.getId())).thenReturn(customer);
        doNothing().when(custService).deleteCustomer(customer.getId());
        
        custService.getCustomer(customer.getId());
        custService.deleteCustomer(customer.getId());
        mockMvc.perform(
        		delete("/customers/{id}", customer.getId())
        		.contentType(contentType))
        		.andDo(print())
                .andExpect(status().isOk());
        
        verify(custService, times(1)).getCustomer(customer.getId());
        verify(custService, times(1)).deleteCustomer(customer.getId());
        verifyNoMoreInteractions(custService);
    }
    
    @Test
    public void testGetAllCustomers() throws Exception {
    	custRepository.save(new Customer(2L, "Bruce", "Wayne", "Mexico"));
    	
    	custService.getAllCustomers();
        mockMvc.perform(get("/customers"))
        		.andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Tony")))
                .andExpect(jsonPath("$[0].surname", is("Stark")))
                .andExpect(jsonPath("$[0].country", is("USA")))
                
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Bruce")))
                .andExpect(jsonPath("$[1].surname", is("Wayne")))
                .andExpect(jsonPath("$[1].country", is("Mexico")));
        
        verify(custService, times(1)).getAllCustomers();
        verifyNoMoreInteractions(custService);
    }
    
    @Test
    public void testGetCustomer() throws Exception {
        mockMvc.perform(get("/customers/{id}", 2))
        		.andDo(print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(contentType))
                .andExpect(jsonPath("$.id", is(2)))
                .andExpect(jsonPath("$.name", is("Bruce")))
                .andExpect(jsonPath("$.surname", is("Wayne")))
                .andExpect(jsonPath("$.country", is("Mexico")));
    }
    
    @SuppressWarnings("unchecked")
	protected String asJson(Object o) throws IOException {
        MockHttpOutputMessage mockHttpOutputMessage = new MockHttpOutputMessage();
        this.mappingJackson2HttpMessageConverter.write(
                o, MediaType.APPLICATION_JSON, mockHttpOutputMessage);
        return mockHttpOutputMessage.getBodyAsString();
    }
    
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
