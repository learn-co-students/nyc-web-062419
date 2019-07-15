require_relative '../config/environment.rb'
require_relative '../tools/kitten_seed_data'

describe 'Kitten Class' do 

  it 'Should be able to create new Kitten instance' do 
    new_kitten = Kitten.new('Timonthy', 'Tabby', 10)
    
    expect(new_kitten.class).to eq(Kitten)
  end

  
  describe 'Kitten.find_cutest_kittens' do 
    # it should return the top 3 cutest kittens
    Kitten.new('Timonthy', 'Tabby', 10)
    Kitten.new('Timo', 'Tabby', 7)
    Kitten.new('Timon', 'Tabby', 1)
    Kitten.new('Tim', 'Tabby', 122)
    Kitten.new('Timonth', 'Tabby', 13)
    Kitten.new('Timy', 'Tabby', 15)
    Kitten.new('Timoy', 'Tabby', 106)
    Kitten.new('Timont', 'Tabby', 106)
    Kitten.new('Timonty', 'Tabby', 103)
    Kitten.new('Jimonty', 'Tabby', 1033)
    
    it 'Should return array of length 3' do 
      cutest_kittens = Kitten.find_cutest_kittens
      # .count

      expect(cutest_kittens.length <= 3).to eq(true)
    end

    describe 'All return cats must start with a "T"' do 
      cutest_kittens = Kitten.find_cutest_kittens

      it 'first kitten starts with a "T"' do
        expect(cutest_kittens[0].name.start_with?('T')).to eq(true)
      end

      it 'second kitten starts with a "T"' do
        expect(cutest_kittens[1].name.start_with?('T')).to eq(true)
      end

      it 'third kitten starts with a "T"' do
        expect(cutest_kittens[2].name.start_with?('T')).to eq(true)
      end

    end
    # the name starts with a T
    
    # it 'Returned kittens are actually the cutest' do
    # highest cuteness rating where the name starts with a T
    
    
    # end


  end



end
